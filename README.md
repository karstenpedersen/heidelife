# Website for Heidelife.dk

## Deployment

To deploy, please create a `.env` file and fill out this:

```
FTP_USER=username-here
FTP_PASS=password-here
FTP_HOST=hostname.here
FTP_PORT=21
```

Then run `npm run deploy`. This will build, export and upload the project.

or

1. Run `npm run export`.
2. Open a FTP program.
3. Move content of `./out` to FTP-server.
