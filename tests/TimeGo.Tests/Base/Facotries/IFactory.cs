using System;

namespace TimeGo.Tests.Base.Facotries
{
    public interface IFactory<out T>
    {
        T Create(Action<T> initialization);
        T Build(Action<T> initialization);
    }
}