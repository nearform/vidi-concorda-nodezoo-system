# vidi-concorda-nodezoo-system
This repo contains all the required config to spin up a [Nodezoo][] system with [Vidi][] and [Concorda][] attached. To get started, clone this repo and follow the steps below.

## Install fuge
To make use of this repo you need to have fuge installed, you can do this via npm,

```
npm install -g fuge
```

## Install Docker
You need the ability to run docker and for it to be active in your session to run this system. Please see Docker's [instructions][docker] for more detail on how to install it for your system. To test if docker is available for fuge to make use of, type the following into your terminal,

```
docker ps -a
```
<<<<<<< HEAD
=======
If you are prompted with an error saying cannot connect to docker daemon, run the following command:

```
docker-machine start default
```
>>>>>>> Added extra instructions to read

If this command doesn't return a TLS connection issue you are good to go otherwise the following command should connect Docker to your session,

```
eval $(docker-machine env default) // your machine name may not be default use docker-machine ls to confirm
```
<<<<<<< HEAD

=======
>>>>>>> Added extra instructions to read
Try the docker command above again, you should now see some form of output and not the original TLS error.

## Install the system
Each dependent repo must be cloned into the same root directory. Your complete system should look like this,

```
/some-folder
--/vidi-concorda-nodezoo-system
--/nodezoo
--/nodezoo-web
--/nodezoo-info
--/nodezoo-search
--/nodezoo-github
--/nodezoo-npm
--/concorda
--/vidi-dashboard
```

### Get the repos
The links for each required repo are listed below,

- [Nodezoo][]
- [Nodezoo web][]
- [Nodezoo info][]
- [Nodezoo search][]
- [Nodezoo github][]
- [Nodezoo npm][]
- [Concorda][]
- [Vidi][]

### Set your branches
While we are working on cleaning these repos up we have had set up some temporary branches for certain repos, before you start please ensure each repo is on the correct branch listed below. As soon as our improvements are in place we will move back to all repos working via the `live` branch as this is where the production version of the system will live going forward.
<<<<<<< HEAD

- Nodezoo - `live`
- Nodezoo web `to-redux`
- Nodezoo info - `live`
- Nodezoo search - `live`
- Nodezoo github - `live`
- Nodezoo npm - `live`
- Concorda - `master`
- Vidi - `master`

=======

- Nodezoo - `live`
- Nodezoo web `to-redux`
- Nodezoo info - `live`
- Nodezoo search - `live`
- Nodezoo github - `live`
- Nodezoo npm - `live`
- Concorda - `master`
- Vidi - `master`

## Install your dependencies
In the root folder run the following command:
```
for d in ./*/; do (cd "$d" && npm install); done
```
This will install most dependencies needed. Then go into the folder nodezoo/system and run:
```
npm install
```
This will the final dependencies.

## Run build

In the root folder run the following command:
```
for d in ./*/; do (cd "$d" && npm run build); done
```
>>>>>>> Added extra instructions to read

## Start the system

1. navigate to `vidi-concorda-nodezoo-system`
2. run `fuge shell system.yml`

___Note:___ You can run infrastructure and services separately using `infrastructure.yml` or `services.yml` over `system.yml`. All three files are also compatible with `docker-compose` should you wish to run without fuge.

[Nodezoo]: https://github.com/rjrodger/nodezoo
[Nodezoo web]: https://github.com/rjrodger/nodezoo-web
[Nodezoo info]: https://github.com/rjrodger/nodezoo-info
[Nodezoo search]: https://github.com/rjrodger/nodezoo-search
[Nodezoo github]: https://github.com/rjrodger/nodezoo-github
[Nodezoo npm]: https://github.com/rjrodger/nodezoo-npm
[Concorda]: https://github.com/nearform/concorda
[Vidi]: https://github.com/nearform/vidi-dashboard

[docker]: ./
