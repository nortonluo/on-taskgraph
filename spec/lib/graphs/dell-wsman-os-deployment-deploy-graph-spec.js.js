// Copyright 2017, Dell EMC, Inc.

'use strict';

describe(require('path').basename(__filename), function () {
    var base = require('./base-graph-spec');

    base.before(function (context) {
        context.taskdefinition = helper.require('/lib/graphs/dell-wsman-os-deployment-deploy-graph.js');
    });

    describe('graph', function () {
        base.examples();
    });

});
