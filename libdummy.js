var LibraryDummy = {
    $Dummy: {
    },
    foo: function() {
        console.log("bar");
    }
};

autoAddDeps(LibraryDummy, '$Dummy');
mergeInto(LibraryManager.library, LibraryDummy);
