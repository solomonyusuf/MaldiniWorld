namespace MaldiniProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fifth1 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Orders", "Quantity");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Orders", "Quantity", c => c.Int(nullable: false));
        }
    }
}
