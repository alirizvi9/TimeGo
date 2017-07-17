namespace TimeGo.ApplicationDomain.Dependency
{
    public static class Get
    {
        public static T Component<T>() where T : class
        {
            return ComponentContainer.Current.Get<T>();
        }
    }
}