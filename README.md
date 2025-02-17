# Khoji Explorer
 Blockchain Explorer for Komodo Platform and it's ecosystem smartchains


# About codebase of Khoji Explorer
This code is derived from Zcash's blockchain explorer https://zcha.in, and it's initial credit all goes to it's code author with the handle "lustro".
Back in 2017-2018, lustro hosted explorer for Komodo blockchain under domain https://kpx.io, and soon after he took it down because of maintenance issues. He shared the source code of explorer files with some Komodo Platform community members, but the original files recived from lustro has no instructions, documentation, license file(s), or even comments inside the code files. Since the source code was shared in good faith with the community members, it was not shared as open source with anyone in Komodo community except some Komodo community memebers.

I guess since nobody at that moment had required skillset to set this up for Komodo, and the team was already busy with existing work load it sat in our archives until recently. Over these years, I learned and practiced a bit on Go language and recently explored it's codebase, and made few changes to it to make it work.

So, the code in `syncblocks.go` is mostly from the original zcha.in explorer's files, with comments added to the code everywhere possible for whatever I could understand in the code, along with the variable and function name changes through out the file. I changed some parts of checking the new blocks adding to the local blockchain and triggiering the sync function of that data with RethinkDB database.

Through my [kmdgo](https://github.com/satindergrewal/kmdgo) go package for Komodo Platform toolset I also added the ability to specify Komodo and it's ecosystem smartchains right at the command line parameters, and not needing to edit or supply any RPC information inside block explorer's code.

# Requirements

- Go 1.14+
- RethinkDB
- Git
- Komomod or Verus blockchain daemon

#### Dependencies

- kmdgo go package
- saplinglib go package
- RethinkDB go driver package

# Install instructions

#### Install Go on your system

On Ubuntu can follow this guide: https://github.com/golang/go/wiki/Ubuntu

```bash
sudo add-apt-repository ppa:longsleep/golang-backports
sudo apt update
sudo apt install golang-go
```

On Mac can install Go using brew.

```bash
brew update
brew install go
```

#### Install RethinkDB

Follow RethinkDB install instructions from it's official source: https://rethinkdb.com/docs/install/

#### Install saplinglib

Installing and setting saplinglib, so you have to get that package and set environment variables.

For Linux setup these environment variables:

```bash
export CGO_CFLAGS="-I$HOME/go/src/github.com/satindergrewal/saplinglib/src/"
export CGO_LDFLAGS="-L$HOME/go/src/github.com/satindergrewal/saplinglib/dist/linux -lsaplinglib -lpthread -ldl -lm"
```

For MacOS setup these environment variables:

```bash
export CGO_CFLAGS="-I$HOME/go/src/github.com/satindergrewal/saplinglib/src/"
export CGO_LDFLAGS="-L$HOME/go/src/github.com/satindergrewal/saplinglib/dist/darwin -lsaplinglib -framework Security"
```

For MacOS ARM64 setup these environment variables:

```bash
export CGO_CFLAGS="-I$HOME/go/src/github.com/satindergrewal/saplinglib/src/"
export CGO_LDFLAGS="-L$HOME/go/src/github.com/satindergrewal/saplinglib/dist/darwin_arm64 -lsaplinglib -framework Security"
```

For MingW cross-platform windows setup these environment variables:

```bash
export CGO_CFLAGS="-I$HOME/go/src/github.com/satindergrewal/saplinglib/src/"
export CGO_LDFLAGS="-L$HOME/go/src/github.com/satindergrewal/saplinglib/dist/win64 -lsaplinglib -lws2_32 -luserenv"
export CC="x86_64-w64-mingw32-gcc"
```

Now fetch go package:

```bash
go get -u github.com/satindergrewal/saplinglib
```

#### Install kmdgo

```bash
go get -u github.com/satindergrewal/kmdgo
```

#### Install RethinkDB driver for Go

```bash
go get -u gopkg.in/rethinkdb/rethinkdb-go.v6
```

#### Installing khoji explorer

Clone khoji source code to your machine

```bash
git clone https://github.com/meshbits/khoji.git
cd khoji
```

Start RethinkDB. It will create the database directory `rethinkdb_data` where you execute the `rethinkdb` command.

```bash
rethinkdb
```

Create the database for explorer. For example, creating database for veruscoin with the DB name "vrsc":

```bash
go run createdb/createdb.go -dbname vrsc
```

It will output bunch of lines similar to this:
```bash
*** Create table result: ***
{"Errors":0,"Inserted":0,"Updated":0,"Unchanged":0,"Replaced":0,"Renamed":0,"Skipped":0,"Deleted":0,"Created":1,"DBsCreated":0,"TablesCreated":0,"Dropped":0,"DBsDropped":0,"TablesDropped":0,"GeneratedKeys":null,"FirstError":"","ConfigChanges":null,"Changes":null}
```

If you see similar outputs, that means it has created the dabase successfully.
You can also check the database by opening http://localhost:8080 in your browser.

#### Installing Komodo or Veruscoin daemon

You can either run `komodod` or `verusd` which is pre-compiled and you just run the blockchain daemon like usual and sync it fully on your machine via command line, or even using Verus Desktop, and start blockchain daemons with full sync mode from it. Make sure it is not running as light wallet.

My copy of VRSC.conf looks like this:
```
rpcuser=user2213847568121
rpcpassword=passcd3dbbf76467e1b6c04adc51e2289af83c0c19394878s7tfa65509785649aecd44c745
rpcport=27486
server=1
txindex=1
rpcworkqueue=256
rpcallowip=127.0.0.1
rpchost=127.0.0.1
```

#### Initiating blockchain sync with RethinkdDB database

You can check help for the command line parameters like this:
```bash
$ go run syncblocks.go --help
Usage of /var/folders/67/mw860sbd1s55w43jy4r8vgvw0000gn/T/go-build362506638/b001/exe/syncblocks:
  -chain komodo
        Define appname variable. The name value must be the matching value of it's data directory name. Example Komodo's data directory is komodo, VerusCoin's data directory is `VRSC` and so on. (default "VRSC")
  -dbname string
        Rethink database name (default "vrsc")
```

So, assuming you have the `verusd` or Verus Desktop running with full blockchain synced on your machine we can proceed with executing the `sync blockchain` command:

```bash
go run syncblocks.go -chain vrsc -dbname vrsc
```

The above should start syncing blockchain data with the database, which can be queried via RethinkDB's data explorer at http://localhost:8080/#dataexplorer.

The example DB queries can be found in the bottom of file `syncblocks.go`.

Hope this helps install and testing this explorer.

# Features

 - This code is tested mostly with the VRSCTEST network of [Veruscoin](http://github.com/veruscoin/).
 - VerusID is already supported, and it has it's own table data created in database.

# TODO

- [ ]	Make Explorer's RPC API using database
- [ ]	Web Graphical Interface for Explorer
- [ ]	Make explorer's gRPC API using database

# Troubleshooting

#### working directory is not part of a module 

```bash
➜  khoji git:(main) go run createdb/createdb.go -dbname vrsctest
createdb/createdb.go:20:2: no required module provides package gopkg.in/rethinkdb/rethinkdb-go.v6: working directory is not part of a module
```

To solve this issue, change the `GO111MODULE` from `on` to `auto`. You can either execute the `go run` or `go build` etc. commands with `GO111MODULE=auto go ...` or export this environment variable in your terminal session temporarily and then execute the `go` commands as mentioned in install/build/run instructions. For example with command:

```bash
export GO111MODULE=auto
```

# Known Issues

- **Wrong balance of Verus blockchain:** At the moment, the balance of VRSC blockchain doesn't show correct in VRSCTEST network, mostly because of needing to do some extra code conditions which are spcific to Verus's DeFi features. **I need help fixing this issue, if anyone can offer that help please.**
