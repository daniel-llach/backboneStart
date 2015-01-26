# backboneStart
Paquete inicial para desarrollar front con **backbone** + **require** mediante instalador de dependencias **bower**

## Requisitos MACOSX:

1.- Tener instalado Homebrew, si no lo tienes abre un terminal y escribe:  (sin considerar los ">").
```
> ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
> brew update
> brew doctor
> export PATH="/usr/local/bin:$PATH"
```

2.- Instalar **nodejs**, luego **npm** (node package manager) y luego **bower**. Todo esto en la consola sería así:

```
> brew install node
> sudo npm install npm -g
> npm install -g bower
```

## Instalar dependencias

Una vez ya tengas todos los requisitos instalados solo debes ejecutar:

```
> bower install
```

Estas listo para comenzar a desarrollar tu SPA (single page app) en js/views/appview.js

## Visualizar

Si deseas visualizar en tu navegador favorito necesitas un servidor virtual, te recomiendo http-server de node, para instalarlo:

```
> npm install http-server -g
```

y luego lo ejecutas asi:
```
> node bin/http-server
```

ahora lo podrás visualizar en http://localhost:8080  



Que lo disfrutes!
