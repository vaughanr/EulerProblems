var _ = require('underscore');


exports.sum = function(multiples,limit){
    var values = [];

    _.each(multiples,function(multiple){
        var current = multiple;

        while(current < limit){
            values.push(current);
            current += multiple;
        }
    });

    values = _.uniq(values);

    return _.reduce(values,function(total,next){
        return total + next;
    });
};