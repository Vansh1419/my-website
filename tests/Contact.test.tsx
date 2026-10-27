import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { Contact } from "@/components/Contact";

const fetchMock = vi.fn();

beforeEach(() => {
  fetchMock.mockReset();
  vi.stubGlobal("fetch", fetchMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.resetModules();
});

function fill(name: string, email: string, message: string) {
  fireEvent.change(screen.getByLabelText("Name"), { target: { value: name } });
  fireEvent.change(screen.getByLabelText("Email"), { target: { value: email } });
  fireEvent.change(screen.getByLabelText("Message"), { target: { value: message } });
}

function send() {
  fireEvent.click(screen.getByRole("button", { name: "Send message" }));
}

test("empty form shows three errors and sends nothing", () => {
  render(<Contact />);
  send();
  expect(screen.getByText("Please enter your name.")).not.toBeNull();
  expect(screen.getByText("Please enter a valid email.")).not.toBeNull();
  expect(screen.getByText("Please enter a message.")).not.toBeNull();
  expect(fetchMock).not.toHaveBeenCalled();
});

test("invalid email is blocked", () => {
  render(<Contact />);
  fill("Ada", "not-an-email", "Hello");
  send();
  expect(screen.getByText("Please enter a valid email.")).not.toBeNull();
  expect(screen.queryByText("Please enter your name.")).toBeNull();
  expect(fetchMock).not.toHaveBeenCalled();
});

test("spaces only counts as empty", () => {
  render(<Contact />);
  fill("   ", "a@b.co", "   ");
  send();
  expect(screen.getByText("Please enter your name.")).not.toBeNull();
  expect(screen.getByText("Please enter a message.")).not.toBeNull();
  expect(fetchMock).not.toHaveBeenCalled();
});

test("valid form posts to Formspree and shows success", async () => {
  fetchMock.mockResolvedValue({ ok: true });
  render(<Contact />);
  fill("Ada", "ada@example.com", "Hello");
  send();

  await waitFor(() => expect(screen.getByText("Thanks! Your message was sent.")).not.toBeNull());
  const [url, options] = fetchMock.mock.calls[0];
  expect(url).toBe("https://formspree.io/f/test-form-id");
  expect(options.method).toBe("POST");
  expect(JSON.parse(options.body)).toEqual({
    name: "Ada",
    email: "ada@example.com",
    message: "Hello",
    _gotcha: "",
  });
  expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe("");
});

test("shows an error message when Formspree rejects the request", async () => {
  fetchMock.mockResolvedValue({ ok: false, status: 404 });
  render(<Contact />);
  fill("Ada", "ada@example.com", "Hello");
  send();

  await waitFor(() => expect(screen.getByText(/could not be sent/)).not.toBeNull());
  expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe("Ada");
});

test("shows an error message when the network fails", async () => {
  fetchMock.mockRejectedValue(new TypeError("Failed to fetch"));
  render(<Contact />);
  fill("Ada", "ada@example.com", "Hello");
  send();

  await waitFor(() => expect(screen.getByText(/could not be sent/)).not.toBeNull());
});

test("shows an error and sends nothing when the form ID is not set", async () => {
  vi.stubEnv("NEXT_PUBLIC_FORMSPREE_ID", "");
  vi.resetModules();
  const { Contact: ContactWithoutId } = await import("@/components/Contact");
  render(<ContactWithoutId />);
  fill("Ada", "ada@example.com", "Hello");
  send();

  await waitFor(() => expect(screen.getByText(/could not be sent/)).not.toBeNull());
  expect(fetchMock).not.toHaveBeenCalled();
});

test("button is disabled while sending", async () => {
  let finish: (value: { ok: boolean }) => void = () => {};
  fetchMock.mockReturnValue(new Promise((resolve) => (finish = resolve)));
  render(<Contact />);
  fill("Ada", "ada@example.com", "Hello");
  send();

  const button = await screen.findByRole("button", { name: "Sending..." });
  expect((button as HTMLButtonElement).disabled).toBe(true);
  finish({ ok: true });
  await waitFor(() => expect(screen.getByText("Thanks! Your message was sent.")).not.toBeNull());
});
