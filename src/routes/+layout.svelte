<script>
	import Header from "../lib/components/common/Header.svelte";
	import Footer from "../lib/components/common/Footer.svelte";
</script>

<div class ="app">
    <main class="content">
        <slot/>
    </main>
</div>

<style>
    .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.content {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
        flex: 1 0 auto;   
	}
</style>
