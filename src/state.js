import { signal } from "@preact/signals-react";

const counter = signal(1);

setInterval( () => counter.value++, 2000);

export { counter }