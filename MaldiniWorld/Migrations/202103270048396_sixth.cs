namespace MaldiniProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class sixth : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Orders", "ProductCode", c => c.String());
            AlterColumn("dbo.Products", "Price", c => c.String());
            AlterColumn("dbo.Products", "ProductCode", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Products", "ProductCode", c => c.Int(nullable: false));
            AlterColumn("dbo.Products", "Price", c => c.Int(nullable: false));
            AlterColumn("dbo.Orders", "ProductCode", c => c.Int(nullable: false));
        }
    }
}
