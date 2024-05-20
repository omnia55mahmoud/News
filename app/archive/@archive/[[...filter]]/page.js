import NewsList from '@/components/news-list';
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import Link from 'next/link';
export default function FilteredNewsPage({params}) {
  const filter = params.filter;
  const selectedYear = filter ? filter[0] : undefined;
  const selectedMonth = filter ? filter[1] : undefined;
  let links = getAvailableNewsYears();
  let news;
  if(selectedYear && !selectedMonth){
     news=getNewsForYear(selectedYear)
     links=getAvailableNewsMonths(selectedYear)
  }
  if(selectedYear && selectedMonth){
    news=getNewsForYearAndMonth(selectedYear,selectedMonth);
    links=[]
  }
  let newsContent = <p> No news found for the selected year</p>
  if(news && news.length > 0){
    newsContent = <NewsList  news= {news}/>
  }

  return (
    <>
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            let href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
           return (
            <li key={link}>
            <Link href={href}>{link}</Link>
          </li>
           )
          })}
        </ul>
      </nav>
    </header>
    {newsContent}
    </>
  ) 
}