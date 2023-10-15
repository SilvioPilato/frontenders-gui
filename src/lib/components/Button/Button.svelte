<script lang="ts">
    import '../../var.css';
	import type { ButtonBorder, ButtonSizeOpts, ButtonState, ButtonVariant } from "../../types.js";
    import { createEventDispatcher } from 'svelte';

    export let size: ButtonSizeOpts = "md";
    export let border: ButtonBorder = 'normal';
    export let state: ButtonState = 'normal';
    export let variant: ButtonVariant = "normal";
    export let outlined = false;

    $: variantClass = outlined ? `button-variant-${variant}-outlined` : `button-variant-${variant}`;
    $: loadingClass = state =='loading' ? 'button-loading' : '';

    const dispatch = createEventDispatcher();
    function onClick() {
        dispatch('click', {});
    }
</script>

<button tabindex="0" type="button" on:click={onClick}
    style={`
        --button-size: var(--font-size-${size});
        --border-radius: var(--border-radius-${border});
        `}
    class={`button-size button-border ${variantClass} ${loadingClass}`} disabled={state==='disabled'}>
    {#if state!=='loading'}
        <slot />
    {:else}
        <i class="fa-solid fa-spinner fa-spin" />
    {/if}
</button>

<style>
    button {
        all: unset;
        position: relative;
        display: inline-block;
        cursor: pointer;
        padding: 0.6rem 1.2rem;
        height: fit-content;
        width: fit-content;
        text-wrap: none;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        transition: transform 0.15s ease;
        overflow-x: hidden;
        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 100%;
            box-shadow: inset 0 0 999999rem #02061720;
            transition: all .5s;
            border-radius: 10rem;
            z-index: 1;
        }
    }
    button:hover {
        /* box-shadow: inset 0 0 999999rem #02061710; */
        &:before {
			width: 100%;
		}
    }
    button:active {
        transform: scale(0.95);
    }
    button:disabled {
        box-shadow: inset 0 0 999999rem #02061720;
        cursor: not-allowed;
        color: #9ca3af;
        &:active {
            transform: none;
        }
        &:before {
			width: 0;
		}
    }
    .button-border {
        border-radius: var(--border-radius);
        &:before {
			border-radius: var(--border-radius);
		}
    }
    .button-size {
        font-size: var(--button-size);
    }
    .button-loading {
        cursor: progress;
    }

    .button-variant-normal {
        background-color: #f5f5f5;
        color: #020617;
    }
    .button-variant-primary {
        background-color: #14b8a6;
        color: #fafafa;
    }
    .button-variant-info {
        background-color: #3b82f6;
        color: #fafafa;
    }
    .button-variant-link {
        background-color: #0284c7;
        color: #fafafa;
    }
    .button-variant-success {
        background-color: #22c55e;
        color: #fafafa;
    }
    .button-variant-warning {
        background-color: #f59e0b;
        color: #fafafa;
    }
    .button-variant-danger {
        background-color: #ef4444;
        color: #fafafa;
    }

    .button-variant-normal-outlined {
        background-color: #f5f5f5;
        color: #020617;
        border: 1px solid #020617;
    }
    .button-variant-primary-outlined {
        background-color: #f5f5f5;
        color: #14b8a6;
        border: 1px solid #14b8a6;
    }
    .button-variant-info-outlined {
        color: #3b82f6;
        background-color: #f5f5f5;
        border: 1px solid #3b82f6;
    }
    .button-variant-link-outlined {
        background-color: #f5f5f5;
        color: #0284c7;
        border: 1px solid #0284c7;
    }
    .button-variant-success-outlined {
        background-color: #f5f5f5;
        color: #22c55e;
        border: 1px solid #22c55e;
    }
    .button-variant-warning-outlined {
        background-color: #f5f5f5;
        color: #f59e0b;
        border: 1px solid #f59e0b;
    }
    .button-variant-danger-outlined {
        background-color: #f5f5f5;
        color: #ef4444;
        border: 1px solid #ef4444;
    }
</style>