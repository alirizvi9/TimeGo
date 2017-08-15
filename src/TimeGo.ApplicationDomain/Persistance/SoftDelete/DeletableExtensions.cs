namespace TimeGo.ApplicationDomain.Persistance.SoftDelete
{
    public static class DeletableExtensions
    {
        public static bool IsDeleted(this IDeletable deletable)
        {
            return deletable.DeletedKey != null;
        }

        public static void Delete(this IDeletable deletable)
        {
            deletable.DeletedKey = deletable.Id;
        }

        public static void Restore(this IDeletable deletable)
        {
            deletable.DeletedKey = null;
        }
    }
}
