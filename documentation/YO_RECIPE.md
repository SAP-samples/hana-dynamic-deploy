```
$ yo sap-partner-eng

     _-----_     ╭──────────────────────────╮
    |       |    │    Welcome to the SAP    │
    |--(o)--|    │    Partner Engineering   │
   `---------´   │    project generator!    │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

After you've generated your base MTA project you can enhance it with the following subgenerators.
 npx --node-arg=--inspect yo sap-partner-eng:subgen

Add Jenkins support with           "?yo sap-partner-eng:jenkins"
Add Deploy to XSA extension with   "?yo sap-partner-eng:deploy2xsa"
Add a Manually managed schema with "?yo sap-partner-eng:db-sch"
Add a HDB-style HDI container with "?yo sap-partner-eng:db-hdb"
Add a CAP-style HDI container with "yo sap-partner-eng:db-cap"
Add a HANA SecureStore with        "?yo sap-partner-eng:db-ss"
Add a NodeJS based module with     "yo sap-partner-eng:module-nodejs"
Add a Java based module with       "?yo sap-partner-eng:module-java"
Add a Python based module with     "?yo sap-partner-eng:module-python"
Add a Docker based module with     "?yo sap-partner-eng:module-docker"

* = This module is not yet available or is in developoment.  YMMV.

? Enter your project folder name (will be created if necessary). dyndep
? Enter your project application name (will be used for defaults). dyndep
? Enter your project application description. HDI Dynamic Deployer Sample Code
? Application router internal module name. dyndep-app
This list of domain names is based on the current 'cf domains' command.
 Domain name. cfapps.us10.hana.ondemand.com
? Application router path app
? Domain/Database model path db
? Services definition path srv
? UAA resource name dyndep-uaa
? UAA service name DYNDEP_UAA
Your project must be inside a folder named dyndep
I'll automatically create this folder.  Change into it with "cd dyndep"
   create README.md
   create .cdsrc.json
   create .gitignore
   create .eslintrc
   create .vscode/cds.js
   create .vscode/launch.json
   create .vscode/settings.json
   create .vscode/tasks.json
   create package.json
   create mta.yaml
   create app/package.json
   create app/xs-app.json
   create app/resources/index.html
   create db/README.md
   create srv/README.md
   create app/resources/favicon.ico

Add Jenkins support with           "?yo sap-partner-eng:jenkins"
Add Deploy to XSA extension with   "?yo sap-partner-eng:deploy2xsa"
Add a Manually managed schema with "?yo sap-partner-eng:db-sch"
Add a HDB-style HDI container with "?yo sap-partner-eng:db-hdb"
Add a CAP-style HDI container with "yo sap-partner-eng:db-cap"
Add a HANA SecureStore with        "?yo sap-partner-eng:db-ss"
Add a NodeJS based module with     "yo sap-partner-eng:module-nodejs"
Add a Java based module with       "?yo sap-partner-eng:module-java"
Add a Python based module with     "?yo sap-partner-eng:module-python"
Add a Docker based module with     "?yo sap-partner-eng:module-docker"

* = This module is not yet available or is in developoment.  YMMV.


Your project is ready.  Change into it with "cd dyndep"
Build+Deploy : "cd dyndep ; mkdir -p mta_archives ; mbt build -p=cf -t=mta_archives --mtar=dyndep.mtar ; cf deploy mta_archives/dyndep.mtar -f"
UnDeploy : "cf undeploy dyndep -f --delete-services"
Change into it with "cd dyndep"
["cfapps.us10.hana.ondemand.com","conciletime.com","cfapps.us10.hanna.ondemand.com"]
C02XN22LJGH6:git i830671$ cd dyndep
C02XN22LJGH6:dyndep i830671$ yo sap-partner-eng:db-hdb
Using app_name: dyndep
? DB Module Name. dyndep-hdb
? DB Module path. db
Leave this blank if you want the system to generate the schema name.
 DB Schema Name. 
? HDI resource name dyndep-hdi
? HDI service name. DYNDEP_HDI
? Would you like a sample table/view in the HDI container? Yes
? HANACloud(hdbtable) compatible? = Y, else HDBCDS style? = N Yes
Using domain_name: cfapps.us10.hana.ondemand.com
   create db/package.json
   create db/src/.hdiconfig
   create db/src/.hdinamespace
   create db/src/defaults/default_access_role.hdbrole
   create db/src/roles/dyndep_admin.hdbrole
   create db/src/data/.hdinamespace
   create db/src/data/sensors_temp.hdbtable
   create db/src/data/sensors_tempNoTimestamp.hdbview
   create db/src/data/temp.csv
   create db/src/data/temp.hdbtabledata
   create db/src/data/tempId.hdbsequence
   create db/src/views/temps.hdbcalculationview
   create db/src/data/sys.hdbsynonym
 conflict mta.yaml
? Overwrite mta.yaml? overwrite this and all others
    force mta.yaml
Be sure to add dyndep-hdi to the requires: section of any existing module that needs access to the HANA service instance DYNDEP_HDI.
```
