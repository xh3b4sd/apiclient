# apiclient

Dummy repo for taking to a grpc api from within a web browser. After creating a
kubernetes cluster using https://github.com/xh3b4sd/kia this api client app can
be deployed and used.



### eks

```
helm -n infra install apiclient ./helm/apiclient --set cluster.name=kia02 --set cluster.zone=aws.example.com
```

```
https://apiclient.kia02.aws.example.com
```



### osx

```
helm -n infra install apiclient ./helm/apiclient
```

```
http://127.0.0.1:7777
```



### npm

```
npm start
```
