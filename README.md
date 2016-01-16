# vidi-concorda-nodezoo-system
This repo contains all the required config to spin up a [Nodezoo][] system with [Vidi][] and [Concorda][] attached. To get started, clone this repo and follow the steps below.

## Install fuge
To make use of this repo you need to have fuge installed, you can do this via npm,

```
npm install -g fuge
```

## Get the repos
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

The links for each required repo are listed below,

- [Nodezoo][]
- [Nodezoo web][]
- [Nodezoo info][]
- [Nodezoo search][]
- [Nodezoo github][]
- [Nodezoo npm][]
- [Concorda][]
- [Vidi][]

For each repo, follow it's setup instructions in it's README. These usually amount to running the following commands in each folder,

```
npm install
npm build
```

Some repo's may have more specific instructions however, please check the README.

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
