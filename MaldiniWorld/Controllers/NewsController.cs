using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MaldiniWorld;

namespace MaldiniWorld.Controllers
{
    public class NewsController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }
    }
}