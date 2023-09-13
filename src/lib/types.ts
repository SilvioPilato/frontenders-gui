export type ButtonSizeOpts = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonBorder = 'normal' | 'squared' | 'rounded';
export type ButtonSizes = {
    'fontSize': string,
    'padding': string,
}
export type ButtonVariant = 'normal' | 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';
export type ButtonState = 'loading' | 'normal' | 'disabled';
export type ButtonStyle = {
    sizes: Record<ButtonSizeOpts, ButtonSizes>,
    border: Record<ButtonBorder, string>,
}