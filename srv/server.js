/*eslint no-console: 0*/
"use strict";

var xsenv = require("@sap/xsenv");
var xssec = require("@sap/xssec");
var hdbext = require("@sap/hdbext");
//var auditLogging = require('@sap/audit-logging');
var createInstanceManager = require("@sap/instance-manager").create;
var express = require("express");
var passport = require("passport");
var stringifyObj = require("stringify-object");
var bodyParser = require("body-parser");

const axios = require('axios');

const { inspect } = require('util');

var app = express();

var server = require("http").createServer();
var port = process.env.PORT || 3000;

xsenv.loadEnv();
var credentials = xsenv.getServices({ auditlog: 'DYNDEP_LOG' }).auditlog;
var auditLog = require('@sap/audit-logging')(credentials);

//const deployers = process.env.deployers;

var deployers = JSON.parse(process.env.deployers);


const hdi_dynamic_deploy_user = process.env.hdi_dynamic_deploy_user;
const hdi_dynamic_deploy_password = process.env.hdi_dynamic_deploy_password;

var g_instmgr;

const services = xsenv.getServices({
    instancemanager: { tag: 'xsa-instancemanager' }
});

//const common_hdi = xsenv.readServices({ hana: 'DYNDEP_HDI' });
const cfenv = require('cfenv');
const common_hdi = cfenv.getAppEnv().services.hana;

createInstanceManager(services.instancemanager, function (err, instmgr) {
  if (err) {
    console.log('Create instance manager error:', err.message);
  }
  else {
    console.log('Create instance manager OK:');
	g_instmgr = instmgr;
  }
});

auditLog.securityMessage('srv module starting')
  .by('System')
  .externalIP('127.0.0.1')
  .tenant('tenantId')
  .log(function (err) {
	console.log("AuditLog:" + inspect(err,false,1));
  });

app.get("/", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>ConcileTime</title></head><body><h1>dyndep-srv</h1><h2>SUCCESS!</h2><br />";
	responseStr += "<a href=\"/node/links\">The Links page.</a><br />";
	responseStr += "<a href=\"/\">Return to home page.</a><br />";
	responseStr += "</body></html>";
	res.status(200).send(responseStr);
});

app.get("/node", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>ConcileTime</title></head><body><h1>dyndep-srv</h1><h2>SUCCESS!</h2><br />";
	responseStr += "<a href=\"/node/links\">The Links page.</a><br />";
	responseStr += "<a href=\"/\">Return to home page.</a><br />";
	responseStr += "</body></html>";
	res.status(200).send(responseStr);
});

app.get("/node/links", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>ConcileTime</title></head><body><h1>dyndep-srv</h1><h2>SUCCESS!</h2><br />";
	responseStr += "<a href=\"/node/instance_get_all\">Get All Instances</a><br />";
	responseStr += "<a href=\"/node/instance_create?client=abc\">Create Instance ABC</a><br />";
	responseStr += "<a href=\"/node/instance_get?client=abc\">Get Instance ABC</a><br />";
	responseStr += "<a href=\"/node/instance_delete?client=abc\">Delete Instance ABC</a><br />";
	responseStr += "<a href=\"/node/instance_deploy?client=abc&deployer=dyn1\">Deploy DYN1 to ABC</a><br />";
	responseStr += "<a href=\"/node/instance_deploy?client=abc&deployer=dyn2&source=src1\">Deploy DYN2 SRC1 to ABC</a><br />";
	responseStr += "<a href=\"/node/instance_deploy?client=abc&deployer=dyn2&source=src2\">Deploy DYN2 SRC2 to ABC</a><br />";
	responseStr += "<a href=\"/node/links\">Back to Links page.</a><br />";
	responseStr += "<a href=\"/\">Return to home page.</a><br />";
	responseStr += "</body></html>";
	res.status(200).send(responseStr);
});

app.get("/node/instance_get_all", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>Get All Instances</title></head><body><h1>Get All Instances</h1><h2>SUCCESS!</h2><br />";

	g_instmgr.getAll(function (err, instances) {
		if (err) {
			responseStr += err.message + "<br />";
			responseStr += "</body></html>";
			res.status(200).send(responseStr);
			return console.log('Get error:', err.message);
		}
		else {
			responseStr += inspect(instances,false,1) + "<br />";
			responseStr += "</body></html>";

			// res.status(200).send(responseStr);
			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(instances));
			
			return console.log('Instances:', inspect(instances,false,1));
		}
	});
	
});

app.get("/node/instance_create", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>Create Instance</title></head><body><h1>Create Instance</h1><h2>SUCCESS!</h2><br />";

	// https://www.npmjs.com/package/@sap/instance-manager
	// optionalParameters | Object | (optional) 
	// JSON object with parameters for provisioning or binding, as would be done with the -c options of the CLI commands create-service and bind-service for unmanaged services. E.g.
	//{
	//  "provisioning_parameters": { "database_id" : "<HANA Tenant DB Guid or Name>" },
	//  "binding_parameters": {"<key>" : "<value>"}
	//}

	var optionalParameters = {
		/* Optional JSON object containing service-specific configuration parameters */
		"provisioning_parameters": { },
		"binding_parameters": { }
	  };
	
	g_instmgr.create(req.query.client, optionalParameters, function (err, instance) {
		if (err) {
			responseStr += err.message + "<br />";
			responseStr += "</body></html>";
			res.status(200).send(responseStr);
			return console.log('Get error:', err.message);
		}
		else {
			responseStr += inspect(instance,false,1) + "<br />";
			responseStr += "</body></html>";
			res.status(200).send(responseStr);
			return console.log('Instances:', inspect(instance,false,1));
		}
	});
	
});

app.get("/node/instance_get", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>Get Instance</title></head><body><h1>Get Instance</h1><h2>SUCCESS!</h2><br />";

	g_instmgr.get(req.query.client, function (err, instance) {
		if (err) {
			responseStr += err.message + "<br />";
			responseStr += "</body></html>";
			res.status(200).send(responseStr);
			return console.log('Get error:', err.message);
		}
		else {
			responseStr += inspect(instance,false,1) + "<br />";
			responseStr += "</body></html>";
			//res.status(200).send(responseStr);

			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(instance));

			return console.log('Instances:', inspect(instance,false,1));
		}
	});
	
});

app.get("/node/instance_delete", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>Delete Instance</title></head><body><h1>Delete Instance</h1><h2>SUCCESS!</h2><br />";

	g_instmgr.delete(req.query.client, function (err, instance) {
		if (err) {
			responseStr += err.message + "<br />";
			responseStr += "</body></html>";
			res.status(200).send(responseStr);
			return console.log('Get error:', err.message);
		}
		else {
			responseStr += inspect(instance,false,1) + "<br />";
			responseStr += "</body></html>";
			res.status(200).send(responseStr);
			return console.log('Instances:', inspect(instance,false,1));
		}
	});
	
});

app.get("/node/instance_deploy", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>Deploy Instance</title></head><body><h1>Deploy Instance</h1><h2>SUCCESS!</h2><br />";

// https://hxe45p.lcfx.net:51056/v1/deploy
/*
{
  "TARGET_CONTAINER": "DYNDEP_HDI1",
  "DEPLOY_ID": "DEPLOY_ME11",
  "APPLICATION_VERSION_INFO": "MyVersionInfo",
  "HDI_DEPLOY_OPTIONS": {
      "include_filter": ["src/src1/"]
  },
  "VCAP_SERVICES" : {
    "hana" : [ {
      "name" : "DYNDEP_HDI1",
      "label" : "hana",
      "tags" : [ "hana", "database", "relational" ],
      "plan" : "hdi-shared",
   "credentials": {
    "host": "hxe45p.lcfx.net",
    "port": "30013",
    "driver": "com.sap.db.jdbc.Driver",
    "url": "jdbc:sap://hxe45p.lcfx.net:30013/?currentschema=57FAEFD9E37F4CD5B796B610BBD155A2",
    "schema": "57FAEFD9E37F4CD5B796B610BBD155A2",
    "hdi_user": "57FAEFD9E37F4CD5B796B610BBD155A2_4VERKQTXWHIZEGKWPNRTX78Z3_DT",
    "hdi_password": "Kf7bPO3D1XuofSaSOnPlSCHjXedbF5qFVH-6hrdsl372VSa4oxr8Gz44hgmNH-rk_1a4hvSyJaf.LaKdM4YI4AWUrJa_90oN2Tqa1S-fqmLh9_2.xhQ_y1Hr1BV3o5Eo",
    "user": "57FAEFD9E37F4CD5B796B610BBD155A2_4VERKQTXWHIZEGKWPNRTX78Z3_RT",
    "password": "Vk8GBRL5TlQD1CAiXhTAO1yIxQxCpGFk0WBDVKUCN49il8TaWSZFZ-jEYfPEQeuWFfv7GwzuxKob76A-ZTh9l_rN9sUM4bspzR899B0q6n2Zmy.DaFXWejh_gSWABUFG",
    "tenant_name": "SYSTEMDB",
    "encrypt": false,
    "db_hosts": [
      {
        "port": 30013,
        "host": "hxe45p.lcfx.net"
      }
    ]
  }
    } ]
  }
}
*/

/*
{
  "TARGET_CONTAINER": "DYNDEP_HDI1",
  "SERVICE_REPLACEMENTS": [{"key":"POC_log-table-grantor","service": "DYNDEP_HDI"}],
  "DEPLOY_ID": "DEPLOY_ME11",
  "APPLICATION_VERSION_INFO": "MyVersionInfo",
  "HDI_DEPLOY_OPTIONS": {
      "include_filter": ["src/","cfg/"]
  },
  "VCAP_SERVICES" : {
    "hana" : [ {
      "name" : "DYNDEP_HDI1",
      "label" : "hana",
      "tags" : [ "hana", "database", "relational" ],
      "plan" : "hdi-shared",
  "credentials": {
    "host": "hxe45p.lcfx.net",
    "port": "30013",
    "driver": "com.sap.db.jdbc.Driver",
    "url": "jdbc:sap://hxe45p.lcfx.net:30013/?currentschema=879625EF3E7D492ABA06AD10FB21C91D",
    "schema": "879625EF3E7D492ABA06AD10FB21C91D",
    "hdi_user": "879625EF3E7D492ABA06AD10FB21C91D_7E8ORPMZGXZKG1Z0CTM26NQIX_DT",
    "hdi_password": "Fy1Cu8dKochMme_bmfvQFQu0e9BEnhjS1AidNs-W-iefh4K.uP5eXnl2kmwHauhk7c36TkVlnIpSAOjpO-d23AV48zCwtxw_w_swMyNiuEdWJw0WGVT529_xM85ZIqbk",
    "user": "879625EF3E7D492ABA06AD10FB21C91D_7E8ORPMZGXZKG1Z0CTM26NQIX_RT",
    "password": "Rz8ET-xiqbHvouf62I6o5KkcP617xKTgQjzi5IgxiVn5WxDMbGURa7McympWfnmHgnmaXD7VFwL3Ut11K4wkzUO7ApLoSxpB5GZBRgYLaNurxlricgGsUEuvdtjVurjV",
    "tenant_name": "SYSTEMDB",
    "encrypt": false,
    "db_hosts": [
      {
        "port": 30013,
        "host": "hxe45p.lcfx.net"
      }
    ]
  }
    } ]
  },
    "ADDITIONAL_VCAP_SERVICES" : {
    "hana" : [ {
      "name" : "DYNDEP_HDI",
      "label" : "hana",
      "tags" : [ "hana", "database", "relational" ],
      "plan" : "hdi-shared",
      "credentials" : {
        "schema" : "12DE1621216B484EAEA7BA643DE2BFE0",
        "hdi_password" : "Pp30THQ88YD9.bsmZ4ct6nch-AhUEgj4FbVRNjp4CwcdS.il6dFVc.E960bFpiLWZSFXKu8w_1atPugA6oRyTDNNWV1gGIlwuA_DmeXGD.M.wy0V5K1cr7VnPNegJ9Sm",
        "tenant_name" : "SYSTEMDB",
        "password" : "Fa6cRb9.q_AE3-UeHe0NgzNktgdxiHQk2e42jsQqn3Xgx3DMrqqRMTm2AHfugk4jmoNEgPPgQ025XibaJ1trBepoTfN8uDOXRdhXPM3OW1fB5zMWLBQVIZJHPnNfDNzN",
        "driver" : "com.sap.db.jdbc.Driver",
        "port" : "30013",
        "encrypt" : false,
        "db_hosts" : [ {
          "port" : 30013,
          "host" : "hxe45p.lcfx.net"
        } ],
        "host" : "hxe45p.lcfx.net",
        "hdi_user" : "12DE1621216B484EAEA7BA643DE2BFE0_14HZMGLWQB8HNTEHOZM2BX6QR_DT",
        "user" : "12DE1621216B484EAEA7BA643DE2BFE0_14HZMGLWQB8HNTEHOZM2BX6QR_RT",
        "url" : "jdbc:sap://hxe45p.lcfx.net:30013/?currentschema=12DE1621216B484EAEA7BA643DE2BFE0"
      }
    } ]
  }
}
*/
    var use_deployer = {};
	var use_source = "default";
	deployers.forEach(deployer => {
		if ("dyndep_" + req.query.deployer === deployer.name) {
			use_deployer = deployer;
			if (req.query.deployer === "dyn2") {
				use_source = req.query.source;
			}
			else {
				use_source = "default";
			}
		}
	});

	responseStr += "<pre>\n" + inspect(deployers,false,2) + "\n</pre>\n" + "<br />";
	responseStr += "<pre>\n" + "use_deployer: " + inspect(use_deployer,false,2) + "\n</pre>\n" + "<br />";
	responseStr += "<pre>\n" + "use_source: " + use_source + "\n</pre>\n" + "<br />";

	responseStr += "<pre>\n" + "use_url: " + typeof use_deployer.url + "\n</pre>\n" + "<br />";

	g_instmgr.get(req.query.client, function (err, instance) {
		if (err) {
			responseStr += err.message + "<br />";
			responseStr += "</body></html>";
			res.status(200).send(responseStr);
			return console.log('Get error:', err.message);
		}
		else {
			responseStr += "<pre>\n" + inspect(instance,false,1) + "\n</pre>\n" + "<br />";

			var axios_config = {
				method: 'post',
				url: use_deployer.url + '/v1/deploy',
				// Axios looks for the `auth` option, and, if it is set, formats a
				// basic auth header for you automatically.
				auth: {
					username: use_deployer.user,
					password: use_deployer.password
				  },
				headers: {
					'Content-Type': 'application/json'
				},
				data: {
					TARGET_CONTAINER: 'DYNDEP_HDI1',
					DEPLOY_ID: 'DEPLOY_ME11',
					APPLICATION_VERSION_INFO: 'MyVersionInfo',
					VCAP_SERVICES: {
						hana: [ 
							{
							name: 'DYNDEP_HDI1',
							label: 'hana',
							tags: [ 'hana', 'database', 'relational' ],
							plan: 'hdi-shared',
							credentials: instance.credentials
							}
						]
					}
				}
			};

			if (use_source !== "default") { // I.E. dyn2
				axios_config.data['HDI_DEPLOY_OPTIONS'] = {
					include_filter: [
						'src/' + use_source + '/'
						]
				}
			}
			else { // I.E. dyn1
				axios_config.data['HDI_DEPLOY_OPTIONS'] = {
					include_filter: [
						'src/',
						'cfg/'
						]
				};
				// Need to get the hana object bound to srv module.
				axios_config.data['ADDITIONAL_VCAP_SERVICES'] = { "hana": common_hdi };
				axios_config.data['SERVICE_REPLACEMENTS'] = [{"key":"POC_log-table-grantor","service": "DYNDEP_HDI"}];
			}

			responseStr += "<pre>\naxios_config:\n" + inspect(axios_config,false,7) + "\n</pre>\n" + "<br />";

			axios(axios_config)
			  .then(function (response) {
				responseStr += "<pre>\response:\n" + inspect(response,false,5) + "\n</pre>\n" + "<br />";
				responseStr += "</body></html>";
				res.status(200).send(responseStr);
				return console.log('response:', inspect(response,false,1));
				})
			  .catch(function (err) {
				responseStr += err.message + "<br />";
				responseStr += "</body></html>";
				res.status(200).send(responseStr);
				return console.log('Get error:', err.message);
				});

		}
	});

	
});


server.on("request", app);

server.listen(port, function () {
	console.info("Backend: " + server.address().port);
});
