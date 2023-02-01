using Microsoft.AspNetCore.Mvc;
using Mission04_twoodru8.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_twoodru8.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet] //this is an attribute
        public IActionResult GradeCalculator()
        {
            return View();
        }

        //overloading this method
        [HttpPost] //attaching it to this method
        public IActionResult Gradecalculator(GradeCalculatorModels model)
        {
            return View();
        }
    }
}
