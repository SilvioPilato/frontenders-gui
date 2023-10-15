<script lang="ts">
	import Button from "$lib/components/Button/Button.svelte";
	function onButtonClick() {
		window.open('https://youtu.be/dQw4w9WgXcQ?si=1q6lY9cosULG0kqo', '_blank');
	}
</script>

<div class="container">
	<div class="container-section">
		<h1>Sizes</h1>
		<div class="button-section">
			<Button size="sm">sm</Button>
			<Button size="md">md</Button>
			<Button size="lg">lg</Button>
			<Button size="xl">xl</Button>
		</div>
	</div>
	<div class="container-section">
		<h1>Borders</h1>
		<div class="button-section">
			<Button border="normal">Normal</Button>
			<Button border="rounded" >Rounded</Button>
			<Button border="squared" >Squared</Button>
		</div>
	</div>
	<div class="container-section">
		<h1>States</h1>
		<div class="button-section">
			<Button state="loading" />
			<Button state="disabled">Disabled</Button>
		</div>
	</div>
	<div class="container-section">
		<h1>Variants</h1>
		<div class="button-section">
			<Button variant="normal">Normal</Button>
			<Button variant="primary">Primary</Button>
			<Button variant="info">Info</Button>
			<Button variant="link">Link</Button>
			<Button variant="success">Success</Button>
			<Button variant="warning">Warning</Button>
			<Button variant="danger">Danger</Button>
		</div>
	</div>
	<div class="container-section">
		<h1>Variants Outlined</h1>
		<div class="button-section">
			<Button variant="normal" outlined>Normal</Button>
			<Button variant="primary" outlined>Primary</Button>
			<Button variant="info" outlined>Info</Button>
			<Button variant="link" outlined>Link</Button>
			<Button variant="success" outlined>Success</Button>
			<Button variant="warning" outlined>Warning</Button>
			<Button variant="danger" outlined>Danger</Button>
		</div>
	</div>
	<div class="container-section">
		<h1>Icons</h1>
		<div class="button-section">
			<Button><i class="fa-solid fa-check" /></Button>
			<Button>Right Icon <i class="fa-solid fa-globe" /></Button>
			<Button><i class="fa-solid fa-home" /> Left Icon</Button>
		</div>
	</div>

	<div class="container-section">
		<h1>On Click</h1>
		<div class="button-section">
			<Button variant="danger" on:click={onButtonClick}><i class="fa-solid fa-mouse" /></Button>
		</div>
	</div>
</div>

<style>
	.container {
		background-color: #a3a3a3;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		height: fit-content;
		padding: 2rem;
	}
	.container-section {
		display: flex;
		flex-direction: column;
		place-items: center;
	}
	.button-section {
		display: flex;
		align-items: flex-end;
		gap: 1rem;
	}
	h1 {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 2rem;
	}
</style>