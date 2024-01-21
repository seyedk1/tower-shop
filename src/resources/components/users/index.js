import Vue from 'vue';
const components = require.context(
    // The relative path of the components folder
    './',
    // Whether or not to look in subfolders
    true,
    // The regular expression used to match base component filenames
    /users(-\w+)+\.(vue|js)$/,
    // optional, 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once', default 'sync'
    'lazy-once'
);

components.keys().forEach(filePath => {
    // Get component config
    const component = components(filePath);
    // Get PascalCase name of component

    // Gets the file name regardless of folder depth
    const fileName = filePath.split('/').pop().replace(/\.\w+$/, '');

    // Register component globally
    Vue.component(
        fileName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        () => component.default || component
        // () => import(`${filePath}`)
    )
});

