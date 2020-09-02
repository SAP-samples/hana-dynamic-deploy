# XSA Build Command:
```
mbt build -p=xsa -t=mta_archives --mtar=dyndep_xsa.mtar
```

# XSA Deploy Command:
```
xs deploy mta_archives/dyndep_xsa.mtar -f
```

# XSA Subsequent Build+Deploy Commands:
```
mbt build -p=xsa -t=mta_archives --mtar=dyndep_xsa.mtar ; xs deploy mta_archives/dyndep_xsa.mtar -f
```

# XSA Undeploy Command:
```
xs undeploy dyndep -f --delete-services
```