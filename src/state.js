import { signal } from "@preact/signals-react";

// Notare come lo stato risiede fuori dal componente principale stesso.
// In verità potrebbe essere dichiarato anche in un modulo esterno ed importato
// qui e funzionare ugualmente.
const counter = signal(1);

// Altrettanto interessante è notare come il setInteval non necessità di essere dichiarato nel componente stesso
setInterval( () => counter.value++, 2000);

export { counter }