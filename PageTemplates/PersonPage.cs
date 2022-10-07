using Piranha.Models;
using Piranha.AttributeBuilder;
using PiranhaTest.Models.CustomModel;

namespace PiranhaTest.PageTemplates
{
    [PageType(Title = "Person Page", UseBlocks = false)]
    [ContentTypeRoute(Title = "Default", Route = "/personpage")]
    public class PersonPage : Page<PersonPage>
    {
        public Person Person { get; set; }

    }
}
