(function () {
$axure.internal(function($ax){
$ax.public.getGlobalVariable = $ax.getGlobalVariable = function(name) {
return $ax.globalVariableProvider.getVariableValue(name);
};
});
})();
