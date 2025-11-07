import { TriggerClient } from "@trigger.dev/nextjs";
import { helloWorldTask } from "../trigger/example"; // Adjust path if necessary

export const client = new TriggerClient({
  id: "xlerion-ultimate",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});

// Attach your tasks to the client
client.defineTask(helloWorldTask);
