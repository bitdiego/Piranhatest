using Microsoft.AspNetCore.Mvc;
using PiranhaTest.Models.CustomModel;
using Piranha;
using PiranhaTest.PageTemplates;

namespace PiranhaTest.Controllers
{
    public class PersonController : Controller
    {
        private readonly IApi _api;
        //private readonly IProductApi _productApi;

        [Route("/personpage")]
        public async Task<IActionResult> Index()
        {
            //var model = await _api.Pages.GetByIdAsync<PersonPage>(id);
            Person p = new Person { Id=1, Name="Pippo"};
            return View(p);
        }

        [Route("/personpage/about")]
        public IActionResult About()
        {
            ViewBag.Message = "I am yourself";
            return View();
        }
    }
}
