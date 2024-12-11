(function() {
    return {
        name: "Sample Plugin",
        description: "This is a test plugin.",
        version: "1.0.0",
        author: "Author Name",
        action: function(enabled) {
            console.log(`Plugin is now ${enabled ? 'enabled' : 'disabled'}`);
        }
    };
})();
