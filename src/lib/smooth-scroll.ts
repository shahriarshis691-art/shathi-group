export const smoothScrollEvent = "shathi:smooth-scroll";

export interface SmoothScrollRequest {
  readonly target: string | number;
  readonly offset?: number;
  readonly duration?: number;
}

export function requestSmoothScroll(request: SmoothScrollRequest) {
  window.dispatchEvent(new CustomEvent<SmoothScrollRequest>(smoothScrollEvent, { detail: request }));
}
