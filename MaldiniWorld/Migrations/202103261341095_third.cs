namespace MaldiniProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class third : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Contacts", "Message", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Contacts", "Message");
        }
    }
}
