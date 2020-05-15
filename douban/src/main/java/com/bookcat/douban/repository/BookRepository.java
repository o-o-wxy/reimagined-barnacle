package com.bookcat.douban.repository;

import com.bookcat.douban.entity.BooksEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface BookRepository extends JpaRepository<BooksEntity, Integer> {
    @Query(value =
            "SELECT * FROM books WHERE MATCH (name,sub_name,series,publisher,authors,tags) AGAINST ( ?1 IN NATURAL LANGUAGE MODE)"
            , nativeQuery = true)
    List<BooksEntity> findByKey(String key);

    List<BooksEntity> findByName(String name);
}
