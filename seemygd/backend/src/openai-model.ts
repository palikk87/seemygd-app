/**
 * The OpenAI image model used for the door swap and the hero re-render.
 *
 * gpt-image-1 was shut down by OpenAI on 2026-10-23. Calls to it return
 * HTTP 400 `{"error":{"message":"The model 'gpt-image-1' does not exist."}}`,
 * which surfaced in the app as "Image generation failed (400)". The successor
 * for image generation and editing (inpainting) is gpt-image-2.5-sunburst.
 *
 * Overridable by env so a future retirement is a dashboard change, not a deploy.
 */
export const OPENAI_IMAGE_MODEL = process.env.OPENAI_IMAGE_MODEL || "gpt-image-2.5-sunburst"
