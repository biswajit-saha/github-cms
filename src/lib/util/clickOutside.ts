export function clickOutside(node: Node) {
	// the node has been mounted in the DOM

	window.addEventListener('click', handleClick);

	function handleClick(event: Event) {
		if (!node.contains(event.target as HTMLElement)) {
			node.dispatchEvent(new CustomEvent('outsideclick'));
		}
	}

	return {
		destroy() {
			// the node has been removed from the DOM
			window.removeEventListener('click', handleClick);
		}
	};
}
