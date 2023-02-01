using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_twoodru8.Models
{
    public class GradeCalculatorModels
    {
        [Required]
        [Range(0,100)]
        public int Assignment { get; set; }
        [Required]
        [Range(0, 100)]
        public int GroupProject { get; set; }
        [Required]
        [Range(0, 100)]
        public int Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int Midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public int Final { get; set; }
        [Required]
        [Range(0, 100)]
        public int Intex { get; set; }
    }
}
