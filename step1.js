// require('babel-core/register')({
//     presets: ['react', 'es2015']
// });

const express = require('express');
const app =  express();
//const helloHtml = require('./isomorphism/hello');

app.get('/', (req, res) => {
    
    res.send(`
        <html>
            <body>
                <div id="root"></div>
                <script type='text/javascript' src='/hello.js'></script>
            </body>
        </html>
    `);
});
app.use(express.static('assets'))
//app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');