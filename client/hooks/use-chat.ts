import { useState } from "react";
import type { ChatRequest, ChatResponse } from "@shared/types";

/**
 * Custom hook for chat functionality
 */
export function useChat() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (
    message: string,
    userId?: string,
    conversationId?: string,
  ): Promise<ChatResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      const request: ChatRequest = {
        message,
        userId,
        conversationId,
      };

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Failed to send message: ${response.statusText}`);
      }

      const data: ChatResponse = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error sending message:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getConversation = async (conversationId: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/chat/${conversationId}`);

      if (!response.ok) {
        throw new Error(`Failed to get conversation: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error getting conversation:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    sendMessage,
    getConversation,
    loading,
    error,
  };
}
