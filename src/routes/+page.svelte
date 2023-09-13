<script lang="ts">
	import Button from "$lib/Button.svelte";
	import {faCheck, faGlobe, faHome, faMouse} from '@fortawesome/free-solid-svg-icons';

	function onButtonClick() {
		window.open('https://youtu.be/dQw4w9WgXcQ?si=1q6lY9cosULG0kqo', '_blank');
	}
</script>

<div class="container">
	<div class="container-section">
		<h1>Sizes</h1>
		<div class="button-section">
			<Button text = "sm" size="sm"/>
			<Button text = "md" size="md"/>
			<Button text = "lg" size="lg"/>
			<Button text = "xl" size="xl"/>
		</div>
	</div>
	<div class="container-section">
		<h1>Borders</h1>
		<div class="button-section">
			<Button text = "Normal" border="normal" />
			<Button text = "Rounded" border="rounded" />
			<Button text = "Squared" border="squared" />
		</div>
	</div>
	<div class="container-section">
		<h1>States</h1>
		<div class="button-section">
			<Button state="loading" />
			<Button state="disabled" text="Disabled"/>
		</div>
	</div>
	<div class="container-section">
		<h1>Variants</h1>
		<div class="button-section">
			<Button text="Normal" variant="normal"/>
			<Button text="Primary" variant="primary"/>
			<Button text="Info" variant="info"/>
			<Button text="Link" variant="link"/>
			<Button text="Success" variant="success"/>
			<Button text="Warning" variant="warning"/>
			<Button text="Danger" variant="danger"/>
		</div>
	</div>
	<div class="container-section">
		<h1>Variants Outlined</h1>
		<div class="button-section">
			<Button text="Normal" variant="normal" outlined/>
			<Button text="Primary" variant="primary" outlined/>
			<Button text="Info" variant="info" outlined/>
			<Button text="Link" variant="link" outlined/>
			<Button text="Success" variant="success" outlined/>
			<Button text="Warning" variant="warning" outlined/>
			<Button text="Danger" variant="danger" outlined/>
		</div>
	</div>
	<div class="container-section">
		<h1>Icons</h1>
		<div class="button-section">
			<Button iconRight={faCheck} />
			<Button text="Hello" variant="info" iconRight={faGlobe} />
			<Button text="Home" variant="success" iconLeft={faHome} />
		</div>
	</div>

	<div class="container-section">
		<h1>On Click</h1>
		<div class="button-section">
			<Button text="" variant="danger" iconRight={faMouse} onClick={onButtonClick}/>
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