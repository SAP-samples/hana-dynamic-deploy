<!--
SPDX-FileCopyrightText: 2020 Andrew Lunde <andrew.lunde@sap.com>

SPDX-License-Identifier: Apache-2.0
-->
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/cloud-sfsf-benefits-ext)](https://api.reuse.software/info/github.com/SAP-samples/cloud-sfsf-benefits-ext)

# SAP HANA Dynamic Deploy

SAP HANA XSA sample code project demonstrating the use of the HANA Deployment Infrastructure(HDI) dynamic deployer.  

## Description

This repository contains a complete Multi-Target Application (MTA) sample project that is an example of using the SAP Cloud Application Programming (CAP) approach and it's multitenancy support library to provide true enterprise multitenant application.

While the principals described here apply specifically to the managed-hana service broker as implemented in on-premise HANA, this approach may be adapted to use the service manager service broker found in SAP Cloud Platform Cloud Foundry.  However, the details are not provided here.  The idea of creating HDI containers at run-time is useful in quasi-multitenant use-cases outside of pure Cloud Foundry multitenancy development approach supporting subscribability.

## Requirements

 - SAP HANA Server Version 2 SPS 04 or later. [SAP HANA](https://www.sap.com/products/database-data-management/hana-database-management-system.html) or [SAP HANA, express edition](https://www.sap.com/cmp/td/sap-hana-express-edition.html).

 
 ## Download and Installation

 - Clone this repo [https://github.com/SAP-samples/hana-dynamic-deploy.git](https://github.com/SAP-samples/hana-dynamic-deploy.git) into your local system or IDE of choice.


## Project Structure

File / Folder | Purpose
---------|----------
`README.md` | this getting started guide
`COMMANDS.md` | commands for building/deploying 
`app/` | content for UI frontends go here
`db/` | staticly deployed database definitions go here
`documentation/` | supplemental documentation
`dyn1/` | dynamically deployed database definitions (1 data source)
`dyn2/` | dynamically deployed database definitions (2 data sources)
`srv/` | your service module code goes here
`mta.yaml` | project structure and relationships

## Instructions

See the [COMMANDS](COMMANDS.md) file for commands for building and deploying the project.


## Known Issues

This example project contains no known issues.

## Limitations

SAP Cloud Platform Cloud Foundry deployment is currently not supported. (Leave feature requests as [issues](https://github.com/SAP-samples/hana-dynamic-deploy/issues).

## How to obtain support

[Create an issue](https://github.com/SAP-samples/hana-dynamic-deploy/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html?additionalTagId=723714486627645412834578565527550).
 
## Documentation

The primary documatation is found at the NPM.org HDI Dynamic Deploy [@sap/hdi-dynamic-deploy](https://www.npmjs.com/package/@sap/hdi-dynamic-deploy) repo.

However, understand that the dynamic deployer wraps the functionality of the primary HDI deployer which has much configuration details [@sap/hdi-deploy](https://www.npmjs.com/package/@sap/hdi-deploy).

For more information about HANA DI, please check [Defining the Data Model in XS Advanced](https://help.sap.com/viewer/4505d0bdaf4948449b7f7379d24d0f0d/2.0.04/en-US/eaa4e37394ea4efba8148d595d025261.html) and the [SAP HANA Deployment Infrastructure](https://help.sap.com/viewer/3823b0f33420468ba5f1cf7f59bd6bd9/2.0.04/en-US/3ef0ee9da11440e4b01708455b8497a9.html) section of the HANA Administration Guide.

## Reporting Problems and Contributing Enhancements

An SAP Code Sample such as this is open software but is not quite a typical full-blown open source project. If you come across a problem, we’d encourage you to check the project’s [issue tracker](https://github.com/SAP-samples/cloud-cap-multitenancy/issues) and to [file a new issue](https://github.com/SAP-samples/cloud-cap-multitenancy/issues/new) if needed. If you are especially passionate about something you’d like to improve, you are welcome to fork the repository and submit improvements or changes as a pull request.


## To-Do (upcoming changes)

Tools used throughout the development of this project are evolving and my change over time. This may result in discrepancies in the exact procedures or screen-clips in the accompanying blog posts. All efforts will be made to update the content in order to keep pace with the tooling, but cannot be guaranteed.


## Learn more...

Stay tuned for an in-depth blog post with detailed discussion.


## License
Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
