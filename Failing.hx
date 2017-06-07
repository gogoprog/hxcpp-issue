
@:buildXml('<target id="haxe" tool="linker">
    <flag value="--js-library libdummy.js"/>
</target>')
class Failing
{
    static public function main()
    {
        trace("Failing");
    }
}
