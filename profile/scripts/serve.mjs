import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const reference = process.env.REFERENCE_ROOT;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.woff2':'font/woff2','.svg':'image/svg+xml','.json':'application/json'};
http.createServer((req,res)=>{
  let url;
  try { url=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch {res.writeHead(400).end();return;}
  const base = process.env.REFERENCE === 'rivixa' && reference ? reference : root;
  let file=path.resolve(base,'.'+url);
  if(!file.startsWith(path.resolve(base)+path.sep)&&file!==path.resolve(base)){res.writeHead(403).end();return;}
  if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
  if(!fs.existsSync(file)){res.writeHead(404).end('Not found');return;}
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});
  fs.createReadStream(file).pipe(res);
}).listen(Number(process.env.PORT||4173),'127.0.0.1',()=>console.log(`Serving ${process.env.REFERENCE||'showcase'} on http://127.0.0.1:${process.env.PORT||4173}`));
