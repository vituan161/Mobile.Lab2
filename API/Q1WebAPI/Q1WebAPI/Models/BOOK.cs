//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Q1WebAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class BOOK
    {
        public int bookid { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public Nullable<decimal> price { get; set; }
        public string note { get; set; }
    }
}
