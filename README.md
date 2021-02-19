# File Sharing System

## Basic Overview
This repository aims at creating a Network Attached Storage(NAS) which would work for local wifi networks only at the moment.
Though there are tons of tools and existing softwares which already do this, but we thought of taking this up as a side project just for the sake of learning.

## Details for Nerds (This being Github, anyone reading this probably is one :P)
The project has two parts :-
1. **NodeJS server which will have the NAS device**
2. **Client Side React Web Application which will internally perform interactions with the server**

**Question: Why did we choose NodeJS and React?**

**Answer: You know the reasons :P.**

We will use **webpack** for bundling our source code for the Server as well as the Client.

**Question: Why use webpack?**

**Answer: Honestly speaking, it is the only module bundler I know how to use. And also it's pretty great!**

## Setup config file and Storage folder
Change the following in the config.json file:
1. `serverUrl` - Mention the IP of the machine where server is running along with port (3001)
2. `storagePath` - Mention the relative storage path from `Server/source/modules`

**Make sure you create a folder for storage before building the code**

## Setup guide (Dev mode)
### Server
1. `yarn`
2. `yarn dev`
3. `yarn devServe`

### Client
1. `yarn`
2. `yarn dev`

## Setup guide (Prod mode)
### Server
1. `yarn`
2. `yarn prod`
3. `yarn prodServe`

### Client
1. `yarn`
2. `yarn prod`
3. `serve -s prod`

#### Developers:-
Sparsha Saha

Sourjya Mukherjee
