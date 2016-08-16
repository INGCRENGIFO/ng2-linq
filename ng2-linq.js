/*--------------------------------------------------------------------------
 * linq.js - LINQ for JavaScript
 * ver 2.2.0.2 (Jan. 21th, 2011)
 *
 * created and maintained by neuecc <ils@neue.cc>
 * licensed under Microsoft Public License(Ms-PL)
 * http://neue.cc/
 * http://linqjs.codeplex.com/
 *--------------------------------------------------------------------------*/
/** Angular 2 Version **/
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Ng2Linq = (function () {
        function Ng2Linq() {
        }
        Ng2Linq.prototype.SampleMethod = function () {
            return "Sample Method for Ng2Ling Service";
        };
        return Ng2Linq;
    }());
    exports.Ng2Linq = Ng2Linq;
});
