using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MaldiniWorld.Startup))]
namespace MaldiniWorld
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
