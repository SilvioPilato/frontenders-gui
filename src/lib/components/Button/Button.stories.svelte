<script context="module" lang="ts">
    import type { Meta } from '@storybook/svelte';
    import Button from './Button.svelte';
    import '@fortawesome/fontawesome-free/css/all.min.css'
    export const meta = {
      title: 'UI Kit/Button',
      component: Button,
      tags: ['autodocs'],
      argTypes: {
        border: {
          control: { type: 'select' },
          options: ['normal', 'squared', 'rounded'],
        },
        size: {
          control: { type: 'select' },
          options: ['sm', 'md', 'lg', 'xl'],
        },
        variant: {
          control: { type: 'select' },
          options: ['normal', 'primary', 'link', 'info', 'success', 'warning', 'danger'],
        },
        state: {
          control: { type: 'select' },
          options: ['loading', 'normal', 'disabled'],
        },
      },
    } satisfies Meta<Button>;
</script>

<script>
    import { Story } from '@storybook/addon-svelte-csf';
    function onButtonClick() {
        window.open('https://youtu.be/dQw4w9WgXcQ?si=1q6lY9cosULG0kqo', '_blank');
    }
</script>


<Story name="default" let:args>
    <Button {...args}>
        Default
    </Button>
</Story>


<Story name="Sizes">
    <Button size="sm">sm</Button>
    <Button size="md">md</Button>
    <Button size="lg">lg</Button>
    <Button size="xl">xl</Button>
</Story>

<Story name="Borders">
    <Button border="normal">Normal</Button>
    <Button border="rounded" >Rounded</Button>
    <Button border="squared" >Squared</Button>
</Story>

<Story name="States">
    <Button state="loading" />
    <Button state="disabled">Disabled</Button>
</Story>

<Story name="Variants">
    <Button variant="normal">Normal</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="info">Info</Button>
    <Button variant="link">Link</Button>
    <Button variant="success">Success</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="danger">Danger</Button>
</Story>

<Story name="Variants Outlined">
    <Button variant="normal" outlined>Normal</Button>
    <Button variant="primary" outlined>Primary</Button>
    <Button variant="info" outlined>Info</Button>
    <Button variant="link" outlined>Link</Button>
    <Button variant="success" outlined>Success</Button>
    <Button variant="warning" outlined>Warning</Button>
    <Button variant="danger" outlined>Danger</Button>
</Story>

<Story name="Icons">
    <Button><i class="fa-solid fa-check" /></Button>
    <Button>Right Icon <i class="fa-solid fa-globe" /></Button>
    <Button><i class="fa-solid fa-home" /> Left Icon</Button>
</Story>

<Story name="On Click">
    <Button variant="danger" on:click={onButtonClick}><i class="fa-solid fa-mouse" /></Button>
</Story>