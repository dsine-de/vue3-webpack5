<template>
	<div>App</div>
</template>

<script>
export default {
	created() {
		// first change of this log message is hot reloading,
		// but a second change just recompiles (doesn't reload)
		// with "[WDS] Nothing changed." message in browser.
		console.log('created');
	}
};
</script>
