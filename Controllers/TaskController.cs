using Microsoft.AspNetCore.Mvc;
using PiranhaTest.Models.CustomModel;

namespace PiranhaTest.Controllers
{
    public class TaskController : Controller
    {
        [Route("/task")]
        public IActionResult Index()
        {
            Models.CustomModel.Task task = new Models.CustomModel.Task { Id = 1, Name = "My Task" };
            return View(task);
        }
    }
}
