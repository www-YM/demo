node version v20.10.0
visit localhost:3005/custom-products

For main branch, I only add instancesearch codes, it runs very well.
For with-server-side-rendering branch, I have add server-side rendering codes, it will throw a server error as below:

```
Server Error
Error: `useIntercom` must be used within `IntercomProvider`.
```

Installed packages
```
"@algolia/autocomplete-js": "^1.4.0",
"@algolia/autocomplete-plugin-query-suggestions": "^1.4.1",
"@algolia/autocomplete-plugin-recent-searches": "^1.4.0",
"@algolia/autocomplete-theme-classic": "^1.4.0",
```
